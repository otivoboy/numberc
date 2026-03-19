import { z } from "zod";

export const ContactFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, { message: "Message cannot be empty." }),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
