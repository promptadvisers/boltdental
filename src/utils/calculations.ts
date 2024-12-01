export function calculateTotalCompensation(
  baseSalary: string,
  experience: string,
  procedures: string,
  certifications: string
): number {
  const base = parseFloat(baseSalary) || 0;
  const expYears = parseFloat(experience) || 0;
  const monthlyProcedures = parseFloat(procedures) || 0;
  const certCount = parseFloat(certifications) || 0;
  
  const expBonus = expYears * 2000;
  const procedureBonus = monthlyProcedures * 50;
  const certBonus = certCount * 1500;
  
  return base + expBonus + procedureBonus + certBonus;
}