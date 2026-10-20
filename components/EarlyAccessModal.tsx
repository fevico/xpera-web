"use client";

import React, { useState } from "react";

interface EarlyAccessModalProps {
  isOpen: boolean;
  role: "traveler" | "driver";
  onClose: () => void;
}

export function EarlyAccessModal({
  isOpen,
  role,
  onClose,
}: EarlyAccessModalProps) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setNameInput("");
    setEmailInput("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 relative shadow-2xl border border-[var(--line)]">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--ink)] text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[var(--ink)]">
                {role === "traveler" ? "Join Early Access" : "Drive With Rydent Drive"}
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                {role === "traveler"
                  ? "Be the first to experience story-driven journeys across Lagos, Abuja & Calabar."
                  : "Apply to become a certified Storyteller Driver or Ambassador."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="e.g. Tunde Adeyemi"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--line)] bg-[var(--sand)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="e.g. tunde@example.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--line)] bg-[var(--sand)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-dark)] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                {role === "traveler"
                  ? "Get Early Access"
                  : "Submit Application"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[var(--sage)]/20 text-[var(--sage)] flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="font-serif text-xl font-bold text-[var(--ink)]">
              You&apos;re on the list!
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Thank you, {nameInput || "Explorer"}! We&apos;ll notify{" "}
              <strong>{emailInput}</strong> as soon as the pilot launches.
            </p>
            <button
              onClick={handleClose}
              className="mt-2 px-6 py-2 rounded-full bg-[var(--espresso)] text-white text-xs font-bold cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
