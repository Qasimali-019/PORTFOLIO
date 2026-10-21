import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import {
  profile,
  experience,
  projects,
  skills,
  achievements,
  certifications,
} from "@/data/portfolioData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function buildPortfolioContext(): string {
  return [
    `PROFILE:
Name: ${profile.name}
Headline: ${profile.headline}
Summary: ${profile.summary}
Location: ${profile.location}`,

    `EDUCATION:
Degree: ${profile.education.degree}
Institution: ${profile.education.institution}
University affiliation: ${profile.education.affiliation}
CGPA: ${profile.education.cgpa}
Graduation: ${profile.education.graduation}`,

    `EXPERIENCE:
${experience
  .map(
    (item) =>
      `- ${item.role} at ${item.organization} (${item.period}, ${item.mode}). ${item.points.join(
        ". "
      )}.${item.project ? ` Project: ${item.project} (${item.projectStatus}).` : ""}`
  )
  .join("\n")}`,

    `PROJECTS:
${projects
  .map(
    (project) =>
      `- ${project.name} [${project.status}] (${project.category}): ${
        project.purpose
      } Tech: ${project.stack.join(", ")}. Facts: ${project.facts.join(", ")}.${
        project.github ? ` GitHub: ${project.github}` : ""
      }${project.url ? ` Demo: ${project.url}` : ""}${
        project.limitations ? ` Limitation: ${project.limitations}` : ""
      }`
  )
  .join("\n")}`,

    `SKILLS:
${skills
  .map((skill) => `- ${skill.category}: ${skill.items.join(", ")}`)
  .join("\n")}`,

    `ACHIEVEMENTS:
${
  achievements.length > 0
    ? achievements
        .map(
          (achievement) =>
            `- ${achievement.title}${
              achievement.organization ? ` (${achievement.organization})` : ""
            }${achievement.track ? ` — ${achievement.track}` : ""}${
              achievement.location ? ` — ${achievement.location}` : ""
            }${achievement.team ? ` — Team: ${achievement.team}` : ""}${
              achievement.scale ? ` — Scale: ${achievement.scale}` : ""
            }`
        )
        .join("\n")
    : "None listed yet."
}`,

    `CERTIFICATIONS:
${
  certifications.length > 0
    ? certifications
        .map(
          (certification) =>
            `- ${certification.title} — ${certification.issuer} (${certification.issued})`
        )
        .join("\n")
    : "No formal certifications yet — Qasim is a self-directed learner who independently picked up Node.js, TypeScript, and PostgreSQL outside the formal curriculum."
}`,

    `CONTACT:
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}`,

    `RESUME:
Qasim's resume is available as a PDF document in the portfolio.
If the visitor asks to see/download the resume, use [OPEN_RESUME].`,
  ].join("\n\n");
}

function generateLocalResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("hire") || q.includes("why should") || q.includes("why hire")) {
    return "Here is why Qasim stands out:\n\n• Real Production Experience: Sole developer on live POS and inventory systems handling real transactions for paying clients, not just tutorial projects.\n• Full-Stack + QA: Currently interning in both development and software testing, so he understands code from both the build side and the bug side.\n• Proven Stack: React, Next.js, Node.js, Express.js, TypeScript, PostgreSQL, MSSQL.\n\nCheck out his work to see what he can do! [OPEN_PROJECTS] [OPEN_ABOUT]";
  }

  if (q.includes("project") || q.includes("built") || q.includes("work")) {
    return "Qasim has built and shipped several full-stack projects, including live client work:\n\n• superchina.pk: Production POS & inventory system built solo for a paying business\n• Event Bookings: Full-stack event platform with ticketing and workflow automation\n• Attendify AI: Face-recognition classroom attendance system\n• Ticket Management System: Built on .NET 8 with Blazor\n\nTap below to explore all projects! [OPEN_PROJECTS]";
  }

  if (q.includes("pos") || q.includes("superchina") || q.includes("inventory")) {
    return "Qasim was the sole developer on a production POS and inventory management platform for superchina.pk, a live paying client — handling real-time inventory, revenue calculations, and a refund engine that locks processed bills to prevent duplicates. [OPEN_PROJECTS]";
  }

  if (q.includes("event") || q.includes("bookings")) {
    return "Event Bookings is a full-stack event management platform Qasim built, supporting in-person, virtual, and hybrid events with ticketing, attendee check-in, and automated email/SMS workflows via SendGrid and Twilio. [OPEN_PROJECTS]";
  }

  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("technology") ||
    q.includes("languages")
  ) {
    return "Here is a quick look at Qasim's tech stack:\n\n• Languages: JavaScript, TypeScript, C++, Java, C#, Python\n• Frontend: React.js, Next.js, Tailwind CSS, Vite\n• Backend: Node.js, Express.js, REST APIs\n• Databases: PostgreSQL, MySQL, MSSQL, MongoDB, Redis\n\nExplore his full skills breakdown! [OPEN_SKILLS]";
  }

  if (
    q.includes("experience") ||
    q.includes("internship") ||
    q.includes("role")
  ) {
    return "Qasim is currently a Full-Stack Developer & QA Intern at Outscalers Pvt Ltd, working across development and software testing. Before that, he was the sole developer on live client POS and inventory systems for superchina.pk and dollarquetta.online. [OPEN_EXPERIENCE]";
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("pdf")) {
    return "You can view and download Qasim's updated resume right here in the portfolio! [OPEN_RESUME]";
  }

  if (
    q.includes("achievement") ||
    q.includes("hackathon") ||
    q.includes("award") ||
    q.includes("win")
  ) {
    return "Qasim doesn't have formal hackathon awards listed yet — his track record is mainly hands-on: shipping live, production-grade software for real clients. [OPEN_PROJECTS]";
  }

  if (
    q.includes("certif") ||
    q.includes("course") ||
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("university") ||
    q.includes("college")
  ) {
    return "Qasim is pursuing his B.Sc. in Computer Science at Air University, Islamabad (2023–2027). He doesn't hold formal certifications yet — he's a self-directed learner who picked up Node.js, TypeScript, and PostgreSQL outside the curriculum. [OPEN_EXPERIENCE]";
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("github") ||
    q.includes("linkedin")
  ) {
    return "Let's connect! You can reach Qasim here:\n\n• Email: qasim.aliii019@gmail.com\n• GitHub: github.com/Qasimali-019\n• LinkedIn: linkedin.com/in/QasimAli\n\nClick below to open his contact panel! [OPEN_CONTACT]";
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("who are you")
  ) {
    return "Hey there! I'm Ask Qasim, his portfolio assistant. Feel free to ask about his live client projects, full-stack skills, or why he'd be a great fit for your team! [OPEN_ABOUT]";
  }

  return `Qasim Ali is a Computer Science student at Air University and a Full-Stack Developer & QA Intern with real production experience — including sole-developer work on live POS systems for paying clients.\n\nFeel free to ask about his work or view his resume! [OPEN_PROJECTS]`;
}

const systemInstruction = `
You are Ask Qasim, an intelligent conversational AI assistant for Qasim Ali's professional portfolio.

Your purpose is to answer visitors naturally, intelligently, and conversationally.

CORE BEHAVIOR:
1. Use the portfolio data supplied with the request as your factual source about Qasim.
2. Do NOT behave like a fixed FAQ bot.
3. Generate a fresh response for every visitor question.
4. Answer the visitor's actual question directly.
5. Keep normal answers concise but complete (2-5 sentences).
6. Do not use Markdown formatting (** or ##).
7. Never invent facts.
8. When relevant, append ONE UI action marker like [OPEN_PROJECTS], [OPEN_ABOUT], [OPEN_RESUME], [OPEN_SKILLS], [OPEN_EXPERIENCE], [OPEN_CERTIFICATIONS], [OPEN_CONTACT].
`;

interface HistoryMessage {
  role: "user" | "assistant";
  content: string;
}

function getHistory(value: unknown): HistoryMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (message): message is HistoryMessage =>
        typeof message === "object" &&
        message !== null &&
        ((message as HistoryMessage).role === "user" ||
          (message as HistoryMessage).role === "assistant") &&
        typeof (message as HistoryMessage).content === "string"
    )
    .slice(-6);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const question =
      typeof body.question === "string" ? body.question.trim() : "";

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey !== "your_gemini_api_key_here") {
      try {
        const portfolioContext = buildPortfolioContext();
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction,
        });

        const history = getHistory(body.history).map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        }));

        const chat = model.startChat({
          history,
          generationConfig: { maxOutputTokens: 700 },
        });

        const userMessage = `PORTFOLIO DATA:\n\n${portfolioContext}\n\nVISITOR QUESTION:\n\n${question}`;
        const result = await chat.sendMessageStream(userMessage);

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of result.stream) {
                const text = chunk.text();
                if (text) {
                  controller.enqueue(encoder.encode(text));
                }
              }
              controller.close();
            } catch (error) {
              console.error("Ask Qasim streaming error:", error);
              controller.error(error);
            }
          },
        });

        return new Response(stream, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Accel-Buffering": "no",
          },
        });
      } catch (geminiErr) {
        console.warn(
          "Gemini API failed, falling back to local QA engine:",
          geminiErr
        );
      }
    }

    // Fallback local response stream when API key is missing or Gemini API fails
    const localAnswer = generateLocalResponse(question);
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(localAnswer));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("Ask Qasim error:", error);

    const fallback = generateLocalResponse("general");
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(fallback));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}