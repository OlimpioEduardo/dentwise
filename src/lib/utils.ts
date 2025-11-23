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


//  ai generated 🎉
export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  { id: "checkup", name: "Regular Checkup", duration: "60 min", price: "$120" },
  { id: "cleaning", name: "Teeth Cleaning", duration: "45 min", price: "$90" },
  { id: "consultation", name: "Consultation", duration: "30 min", price: "$75" },
  { id: "emergency", name: "Emergency Visit", duration: "30 min", price: "$150" },
];