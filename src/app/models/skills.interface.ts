export interface Skill {
  name?: string;
  icon?: string;
}

export interface SkillCard {
  title?: string;
  skills?: Skill[];
}