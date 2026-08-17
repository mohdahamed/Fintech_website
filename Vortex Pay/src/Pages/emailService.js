// Email Services - Simulated backend responses
// In production, this would call a real backend service

export const emailService = {
  // Send verification email
  sendVerificationEmail: async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Verification email sent to ${email}`,
          code: Math.random().toString(36).substr(2, 6).toUpperCase()
        });
      }, 800);
    });
  },

  // Send welcome email
  sendWelcomeEmail: async (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Welcome email sent to ${user.email}`,
          timestamp: new Date().toISOString()
        });
      }, 1000);
    });
  },

  // Send contact form reply (backend should handle this)
  sendContactReply: async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Thank you for contacting VortexPay. We received your message and will respond within 24 hours.`,
          ticketId: `TK-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
          timestamp: new Date().toISOString()
        });
      }, 1200);
    });
  },

  // Send password reset email
  sendPasswordReset: async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Password reset link sent to ${email}`,
          expiresIn: 3600 // 1 hour
        });
      }, 800);
    });
  },

  // Send transaction confirmation
  sendTransactionConfirmation: async (user, transaction) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Transaction confirmation sent to ${user.email}`,
          transactionId: transaction.id
        });
      }, 600);
    });
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Successfully subscribed ${email} to our newsletter`,
          confirmationToken: Math.random().toString(36).substr(2, 12)
        });
      }, 800);
    });
  }
};
