import { VERIFICATION_EMAIL_TEMPLATE } from "./emailsTemplates.js";
import { mailtrapClient } from "./mailtrap.config.js";
import { sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "d56e171e-7084-4e7f-a2f6-d1fc0bddfbf3",
      template_variables: {
        name: "auth",
        company_info_name: "auth company",
      },
    });
    console.log("welcome email sent successfully", response);
  } catch (error) {
    console.error("error sending welcome email", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};
