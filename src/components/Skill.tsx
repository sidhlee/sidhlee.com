import styled from "styled-components"

const StyledSkill = styled("li")<{ brandColor: string }>`
  margin: 0.25em 0.75em;
  font-family: var(--ff-heading);
  font-size: 2.4rem;
  font-style: italic;
  color: var(--text-muted);
  button {
    text-shadow: var(--shadow);
  }
  transition: all 300ms var(--timing-spring);
  &:hover {
    color: ${({ brandColor }) => (brandColor ? brandColor : "var(--cl-white)")};
    transform: scale(1.1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`

type SkillProps = {
  title: string
  brandColor: string
}

const Skill: React.FC<SkillProps> = ({ title, brandColor }) => {
  return (
    <StyledSkill brandColor={brandColor}>
      <button>{title}</button>
    </StyledSkill>
  )
}

export default Skill
