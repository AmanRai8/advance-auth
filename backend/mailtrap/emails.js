import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailsTemplates.js";
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

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "password reset",
    });
  } catch (error) {
    console.error("error sending password sending email", error);
    throw new Error(`error sending password sending mail:${error}`);
  }
};

export const resetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "reset password successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "password reset",
    });
    console.log("password reset email sent successfully", response);
  } catch (error) {
    console.error("error sending password reset success email", error);
    throw new Error(`error sending password reset success email:${email}`);
  }
};
