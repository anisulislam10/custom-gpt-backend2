(function () {
  window.ChatbotConfig = window.ChatbotConfig || {};
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.initChatbot === 'function') {
      console.log('[Chatbot] Calling initChatbot');
      window.initChatbot();
    } else {
      console.error('[Chatbot] Error: initChatbot is not defined');
      const container = document.getElementById('chatbot-container');
      if (container) {
        container.innerHTML = `
          <div style="
            padding: 24px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            color: #d32f2f;
            border-radius: 12px;
            text-align: center;
            font-family: Manrope, sans-serif;
            max-width: 400px;
            margin: 20px auto;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          ">
            <p style="font-size: 16px; font-weight: 600; margin: 0;">Error: Failed to initialize chatbot</p>
            <button id="retry-button" style="
              background: ${window.ChatbotConfig.theme?.primary || '#6366f1'};
              color: #ffffff;
              padding: 10px 20px;
              border-radius: 10px;
              border: none;
              cursor: pointer;
              margin-top: 12px;
              font-size: 14px;
              font-weight: 500;
              transition: background 0.2s;
            ">Retry</button>
          </div>
        `;
        document.getElementById('retry-button')?.addEventListener('click', () => {
          window.location.reload(); // Retry by reloading the page
        });
      }
    }
  });
})();