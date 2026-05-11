export const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/ydzq3nnlpN6Tc7fbi761/webhook-trigger/c856f1f5-b88e-4671-9bf9-bae53ca8218d';

export async function submitToWebhook(data: Record<string, any>) {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
        source: window.location.href,
      }),
    });

    if (!response.ok) {
      throw new Error('Webhook submission failed');
    }

    return true;
  } catch (error) {
    console.error('Error submitting to webhook:', error);
    return false;
  }
}
