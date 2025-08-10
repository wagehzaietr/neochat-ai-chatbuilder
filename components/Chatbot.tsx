'use client'

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { TextShimmer } from "./ui/text-shimmer";

import {
  X,
  Send,
  MessageCircle,
  User,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { BotPic } from "./logo";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  const [modalOpen, setModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState<number>(0);
  const [subscribe, setSubscribe] = useState<boolean>(false);
  const MESSAGE_LIMIT = 1; // Set your message limit here

  // Load message count from localStorage on component mount
  useEffect(() => {
    const savedCount = localStorage.getItem("chatMessageCount");
    if (savedCount) {
      const count = parseInt(savedCount, 10);
      setMessageCount(count);
      if (count >= MESSAGE_LIMIT) {
        setSubscribe(true);
      }
    }
  }, []);

  // Save message count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chatMessageCount", messageCount.toString());
    if (messageCount >= MESSAGE_LIMIT) {
      setSubscribe(true);
    }
  }, [messageCount]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (modalOpen && inputRef.current) {
      inputRef.current.focus();
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [modalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || subscribe) return;

    setIsLoading(true);
    try {
      await sendMessage({ text: input });
      // Increment message count only for user messages
      setMessageCount((prev) => prev + 1);
    } finally {
      setIsLoading(false);
    }
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  };

  // Development-only reset function
  const resetMessageCount = () => {
    if (process.env.NODE_ENV === "development") {
      setMessageCount(0);
      setSubscribe(false);
      localStorage.removeItem("chatMessageCount");
    }
  };

  return (
    <>
      {/* Modal Overlay */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="AI chat dialog"
        >
          {/* Chat Container */}
          <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/10 border border-white/50 dark:border-white/5 w-full max-w-2xl h-[640px] flex flex-col animate-in slide-in-from-bottom-4 duration-300 overflow-hidden">
            {/* Subtle gradient top border accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-indigo-500 opacity-70" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200/60 dark:border-zinc-800/80 bg-gradient-to-br from-white/70 to-white/40 dark:from-zinc-900/60 dark:to-zinc-900/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-zinc-800/60">
                  <BotPic />
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
                      AI Assistant
                    </h2>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] rounded-full ${
                        isLoading
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                          isLoading ? "bg-amber-500" : "bg-emerald-500"
                        }`}
                      />
                      {isLoading ? "Typing" : "Online"}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {subscribe
                      ? "Demo ended with our chatbot"
                      : "Enjoying our chat?"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {process.env.NODE_ENV === "development" && (
                  <button
                    onClick={resetMessageCount}
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200 group"
                    aria-label="Reset message count"
                    title="Reset message count (dev only)"
                  >
                    <RefreshCw className="w-5 h-5 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
                  </button>
                )}
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200 group"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scroll-smooth bg-gradient-to-b from-transparent to-zinc-50/60 dark:to-zinc-900/40"
              aria-live="polite"
            >
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl" />
                    <div className="relative w-16 h-16 rounded-2xl bg-white/80 dark:bg-zinc-800/70 ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                    Start a conversation
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
                    I’m a chatbot ready to help. Ask anything to get started.
                  </p>

                  {subscribe && (
                    <div className="mt-5 p-4 bg-yellow-50/80 dark:bg-yellow-900/20 border border-yellow-200/70 dark:border-yellow-800 rounded-xl">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        You've reached your message limit. Please subscribe to
                        continue chatting.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {messages.map((message, index) => {
                    const isAssistant = message.role === "assistant";
                    const isUser = message.role === "user";
                    return (
                      <div
                        key={message.id}
                        className={`flex gap-3 items-end animate-in slide-in-from-bottom-2 duration-300 ${
                          isAssistant ? "justify-start" : "justify-end"
                        }`}
                        style={{ animationDelay: `${index * 40}ms` }}
                      >
                        {/* Assistant avatar on the left */}
                        {isAssistant && (
                          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-zinc-800/60">
                            <BotPic />
                          </div>
                        )}

                        {/* Message bubble */}
                        <div
                          className={`max-w-[75%] ${
                            isAssistant ? "text-left" : "text-right"
                          }`}
                        >
                          <div
                            className={`inline-block rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                              isUser
                                ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-br-sm"
                                : "bg-white/90 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 border border-zinc-200/60 dark:border-zinc-700/70 rounded-bl-sm"
                            }`}
                          >
                            {message.parts.map((part, i) => {
                              switch (part.type) {
                                case "text":
                                  return (
                                    <div
                                      key={`${message.id}-${i}`}
                                      className="whitespace-pre-wrap break-words"
                                    >
                                      {part.text}
                                    </div>
                                  );
                              }
                            })}
                          </div>
                        </div>

                        {/* User avatar on the right */}
                        {isUser && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                            <User className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </>
              )}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <TextShimmer className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/80 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/70 text-zinc-600 dark:text-zinc-300">
                    typing...
                  </TextShimmer>
                </div>
              )}

              {messageCount >= MESSAGE_LIMIT && !isLoading && (
                <div className="flex justify-center animate-in slide-in-from-bottom-2 duration-300">
                  <div className="bg-gradient-to-r from-purple-50/90 to-pink-50/90 dark:from-purple-900/25 dark:to-pink-900/25 border border-purple-200/70 dark:border-purple-800/70 rounded-2xl p-4 max-w-sm shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                        {subscribe
                          ? "Demo ended with our chatbot"
                          : "Enjoying our chat?"}
                      </span>
                    </div>
                    <p className="text-xs text-purple-700 dark:text-purple-300 mb-2">
                      {subscribe
                        ? "You've reached your message limit. Create your own AI chatbot now."
                        : "Build your own AI chatbot in minutes!"}
                    </p>
                    <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                      <Link
                        href={
                          subscribe
                            ? "/subscribe"
                            : "https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat"
                        }
                        target={subscribe ? "_self" : "_blank"}
                        className="underline hover:text-purple-700 dark:hover:text-purple-300"
                      >
                        {subscribe ? "Click here now" : "Build your own now"}
                      </Link>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="px-4 py-3 border-t border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    className="w-full pr-12 pl-4 py-3 bg-white/90 dark:bg-zinc-800/80 border border-zinc-200/70 dark:border-zinc-700/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-transparent placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-900 dark:text-zinc-100 transition-all duration-200 shadow-sm"
                    value={input}
                    placeholder={
                      isLoading
                        ? "AI is thinking..."
                        : subscribe
                        ? "Subscribe to continue chatting..."
                        : "Type your message..."
                    }
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading || subscribe}
                    aria-label="Type your message"
                  />
                  {/* Decorative right inset for input */}
                  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10" />
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || subscribe}
                  className="h-12 w-12 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-600/90 hover:to-indigo-600/90 disabled:from-zinc-300 disabled:to-zinc-400 dark:disabled:from-zinc-700 dark:disabled:to-zinc-800 text-white transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 disabled:transform-none shadow-md"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {!subscribe && (
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center">
                  Messages: {messageCount}/{MESSAGE_LIMIT}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed cursor-pointer bottom-6 right-6 w-14 h-14 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group z-40 bg-gradient-to-br from-fuchsia-500 to-indigo-600 hover:from-fuchsia-500/90 hover:to-indigo-600/90"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
        <div className="absolute inset-0 rounded-2xl bg-fuchsia-500/40 animate-ping opacity-20" />
        <span className="sr-only">Open AI chat</span>
      </button>
    </>
  );
}