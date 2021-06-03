import styled from "styled-components"

const StyledSkill = styled("li")<{ brandColor: string }>`
  margin: 0.5em 1em;
  font-family: var(--ff-heading);
  font-size: var(--fz-skill);
  font-style: italic;
  color: var(--text-muted);
  button {
    text-align: left;
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
  setCurrentSkill: () => void
}

const Skill: React.FC<SkillProps> = ({
  title,
  brandColor,
  setCurrentSkill,
}) => {
  return (
    <StyledSkill brandColor={brandColor}>
      <button onClick={setCurrentSkill}>{title}</button>
    </StyledSkill>
  )
}

export default Skill
