import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MOBILE_VIEWPORT } from 'twenty-ui';
import { ActionMenuEntry } from '@/action-menu/types/ActionMenuEntry';
import { MenuItemAccent } from '@/ui/navigation/menu-item/types/MenuItemAccent';

type RecordShowActionMenuBarEntryProps = {
  entry: ActionMenuEntry;
};

const StyledButton = styled.div<{ accent: MenuItemAccent }>`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  color: ${(props) =>
    props.accent === 'danger'
      ? props.theme.color.red
      : props.theme.font.color.secondary};
  cursor: pointer;
  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing(2)};
  transition: background 0.1s ease;
  user-select: none;

  &:hover {
    background: ${({ theme, accent }) =>
      accent === 'danger'
        ? theme.background.danger
        : theme.background.transparent.light};
  }

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

const StyledButtonLabel = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-left: ${({ theme }) => theme.spacing(1)};
`;

// For now, this component is the same as RecordIndexActionMenuBarEntry but they
// will probably diverge in the future
export const RecordShowActionMenuBarEntry = ({
  entry,
}: RecordShowActionMenuBarEntryProps) => {
  const theme = useTheme();
  return (
    <StyledButton
      accent={entry.accent ?? 'default'}
      onClick={() => entry.onClick?.()}
    >
      {entry.Icon && <entry.Icon size={theme.icon.size.md} />}
      <StyledButtonLabel>{entry.label}</StyledButtonLabel>
    </StyledButton>
  );
};
