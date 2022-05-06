export interface SendMainData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: SendMainData) => Promise<void>;
}
