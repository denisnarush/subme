export interface IUiModal {
  toggle(): void;
  activate(): void;
  deactivate(): void;
  isActive(): boolean;
}
