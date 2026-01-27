"use client"
import { useEffect } from "react"
import "@n8n/chat/style.css";


export function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://n8n.fluxia.cl/webhook/0ce649f4-508c-4df7-9354-b4a215047b71/chat",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages: [
          "👋 Hola! Soy el asistente virtual de Vibralma y estoy aquí para ayudarte."
        ],
        i18n: {
          en: {
            title: "Vibralma",
            subtitle: "Asistencia Virtual",
            inputPlaceholder: "Escribe aqui..",
          },
        },
      });
    });
  }, []);

  return null;
}
