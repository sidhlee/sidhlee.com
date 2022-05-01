import styled from "styled-components"

const StyledSkill = styled("li")<{ brandColor: string }>`
  margin: calc(var(--fz-skill) * 0.6);
  font-family: var(--ff-heading);
  font-size: var(--fz-skill);
  font-style: italic;
  color: var(--text-muted);

  button {
    padding: 0.2rem 0.5rem;
    background: #222;
    line-height: 1;
    text-align: center;
    text-shadow: var(--shadow);
    transition: all 300ms var(--timing-spring);
    &:hover {
      color: ${({ brandColor }) =>
        brandColor ? brandColor : "var(--cl-white)"};
      transform: scale(1.1);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
    }
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
