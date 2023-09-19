export interface ToolbarNotificationOutput extends ToolbarNotification {
  dismiss: () => void;
}

export interface ToolbarNotification {
  message: string;
  duration: number;

  actions?: ToolbarNotificationAction[];
}

export interface ToolbarNotificationAction {
  label: string;
  action: () => void;
}
