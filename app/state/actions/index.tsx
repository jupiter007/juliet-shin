import { ActionType } from '../action-types';

interface FlashMessages {
  type: 'flash-message';
  value: string;
}

interface OpenSubMenu {
  type: ActionType.OPEN_SUB_MENU;
}

interface CloseSubMenu {
  type: ActionType.CLOSE_SUB_MENU;
}

export type Action = FlashMessages | OpenSubMenu | CloseSubMenu;
