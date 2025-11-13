import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// phone formatting function for AO numbers - ai generated 🎉
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // Remove tudo que não for número
  const phoneNumber = value.replace(/[^\d]/g, "");

  let formatted = phoneNumber;

  // Remove o código do país para formatar só os 9 dígitos
  if (phoneNumber.startsWith("244")) {
    formatted = phoneNumber.slice(3);
  }

  // Limita a 9 dígitos
  formatted = formatted.slice(0, 9);

  if (formatted.length < 4) return formatted;
  if (formatted.length < 7) return `${formatted.slice(0, 3)} ${formatted.slice(3)}`;

  // Quando o número estiver completo, adiciona o +244
  if (formatted.length === 9) {
    return `+244 ${formatted.slice(0, 3)} ${formatted.slice(3, 6)} ${formatted.slice(6, 9)}`;
  }

  // Durante digitação, sem +244
  return `${formatted.slice(0, 3)} ${formatted.slice(3, 6)} ${formatted.slice(6, 9)}`;
};


