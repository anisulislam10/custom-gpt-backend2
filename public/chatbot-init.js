(function () {
  window.ChatbotConfig = window.ChatbotConfig || {};
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.initChatbot === 'function') {
      console.log('[Chatbot] Calling initChatbot');
      window.initChatbot();
    } else {
      console.error('[Chatbot] Error: initChatbot is not defined');
      document.getElementById('chatbot-container').innerHTML = `
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
        </div>
      `;
    }
  });
})();
 