import { Check, X } from "lucide-react"; // Import icons for checkmark and cross
import React from "react";

// Component to display individual password criteria with check or cross icon
const PasswordCriteria = ({ password }) => {
  // Define an array of password criteria with a label and whether it is met
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="mt-2 space-y-1 ">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-xs">
          {/* Show Check icon if criteria met, otherwise X icon */}
          {item.met ? (
            <Check className="size-4 text-cyan-200 mr-2" />
          ) : (
            <X className="size-4 text-gray-500 mr-2" />
          )}
          {/* Text color changes depending on whether criteria is met */}
          <span className={item.met ? "text-cyan-200" : "text-gray-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// Component to show overall password strength meter and criteria list
const PasswordStrengthMeter = ({ password }) => {
  // Function to calculate password strength based on 4 factors
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++; // length at least 6
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++; // has both lowercase and uppercase
    if (pass.match(/\d/)) strength++; // contains a number
    if (pass.match(/[^a-zA-Z\d]/)) strength++; // contains special char
    return strength; // returns value from 0 to 4
  };

  const strength = getStrength(password);

  // Returns a Tailwind CSS class string for the bar color based on strength
  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500"; // very weak = red
    if (strength === 1) return "bg-red-400"; // weak = lighter red
    if (strength === 2) return "bg-yellow-500"; // fair = yellow
    if (strength === 3) return "bg-yellow-400"; // good = lighter yellow
    return "bg-green-500"; // strong = green
  };

  // Returns descriptive text for password strength
  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="mt-2">
      {/* Strength label and descriptive text */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400">Password Strength</span>
        <span className="text-xs text-gray-400">
          {getStrengthText(strength)}
        </span>
      </div>

      {/* Visual strength bars */}
      <div className="flex space-x-1">
        {/* Render 4 bars representing strength levels */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
              ${index < strength ? getColor(strength) : "bg-gray-600"}
            `}
          />
        ))}
      </div>

      {/* Show the detailed password criteria */}
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
