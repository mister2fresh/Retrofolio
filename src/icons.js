/**
 * Icon registry
 * Maps the string icon names used in config.js → actual react-icons components.
 * To add a new icon: import it below, then add it to the ICONS object.
 */

import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,
  FaGitAlt, FaPython, FaDocker, FaAws,
  FaGithub, FaLinkedin,
} from "react-icons/fa";

import {
  SiPostgresql, SiMongodb, SiPostman, SiTailwindcss,
  SiTypescript, SiRedis, SiGraphql, SiLinux,
  SiFigma, SiNextdotjs, SiExpress, SiJest, SiNpm,
} from "react-icons/si";

export const ICONS = {
  // Languages
  FaJs, SiTypescript, FaPython,
  // Frontend
  FaReact, SiNextdotjs, FaHtml5, FaCss3Alt, SiTailwindcss,
  // Backend
  FaNodeJs, SiExpress, SiGraphql, SiNpm,
  // Databases
  SiPostgresql, SiMongodb, SiRedis,
  // DevOps & Tools
  FaGitAlt, FaDocker, FaAws, SiLinux, SiPostman, SiJest,
  // Design
  SiFigma,
  // Social (used by Hero / Contact)
  FaGithub, FaLinkedin,
};
