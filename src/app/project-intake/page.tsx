"use client";

import { useState } from "react";

type FormData = {
  projectType?: string;
  organization?: string;
  timeline?: string;
  name?: string;
  email?: string;
  notes?: string;
};

export default function ProjectIntake() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({});

  const update = (field: keyof FormData, value: string) => {
    setData({ ...data, [field]: value });
  };

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  async function submit() {
    await fetch("/api/intake", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setStep(5);
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full">

        <h1 className="text-3xl font-bold mb-2">
          Start Your Spatialytics Project
        </h1>

        <p className="text-gray-600 mb-8">
          Tell us about your mapping or data project.
        </p>

        {/* Progress */}
        <div className="h-2 bg-gray-200 rounded mb-8">
          <div
            className="h-2 bg-indigo-600 rounded"
            style={{ width: `${step * 25}%` }}
          />
        </div>

        {step === 1 && (
          <div>
            <h2 className="mb-4 font-semibold">What do you need?</h2>

            {[
              "Interactive Map",
              "Dashboard / Data Visualization",
              "GIS Analysis",
              "Story Map / Website",
            ].map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  update("projectType", opt);
                  next();
                }}
                className="block w-full border p-4 rounded mb-3 hover:bg-gray-50"
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="mb-4 font-semibold">Who is this project for?</h2>

            {[
              "Business",
              "Local Government",
              "Nonprofit",
              "Community Project",
              "Research / Academic",
            ].map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  update("organization", opt);
                  next();
                }}
                className="block w-full border p-4 rounded mb-3 hover:bg-gray-50"
              >
                {opt}
              </button>
            ))}

            <button onClick={back} className="mt-4 text-sm text-gray-500">
              Back
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="mb-4 font-semibold">What timeline are you on?</h2>

            {["ASAP", "Within a month", "1-3 months", "Just exploring"].map(
              (opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    update("timeline", opt);
                    next();
                  }}
                  className="block w-full border p-4 rounded mb-3 hover:bg-gray-50"
                >
                  {opt}
                </button>
              )
            )}

            <button onClick={back} className="mt-4 text-sm text-gray-500">
              Back
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="mb-4 font-semibold">Contact info</h2>

            <input
              placeholder="Your name"
              className="w-full border p-3 rounded mb-3"
              onChange={(e) => update("name", e.target.value)}
            />

            <input
              placeholder="Email"
              className="w-full border p-3 rounded mb-3"
              onChange={(e) => update("email", e.target.value)}
            />

            <textarea
              placeholder="Tell us about your project"
              className="w-full border p-3 rounded mb-3"
              onChange={(e) => update("notes", e.target.value)}
            />

            <button
              onClick={submit}
              className="w-full bg-indigo-600 text-white p-3 rounded"
            >
              Submit Project Request
            </button>

            <button onClick={back} className="mt-4 text-sm text-gray-500">
              Back
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Thanks! Your request was sent.
            </h2>

            <p className="text-gray-600">
              We'll contact you soon to discuss your Spatialytics project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
