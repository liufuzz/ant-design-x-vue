import type { ButtonProps, Input, TextAreaProps } from "ant-design-vue";
import type { ChangeEvent, ClipboardEventHandler, KeyboardEventHandler } from "ant-design-vue/es/_util/EventInterface";
import type { ConfigProviderProps } from "ant-design-vue/es/config-provider/context";
import type { CSSProperties, VNode, } from "vue";
import type { AllowSpeech } from "./useSpeech";
import type { InputRef } from "ant-design-vue/es/vc-input/inputProps";
import SendButton from "./components/SendButton.vue";
import ClearButton from "./components/ClearButton.vue";
import LoadingButton from "./components/LoadingButton.vue";

export type SubmitType = 'enter' | 'shiftEnter' | false;

export interface SenderComponents {
  input?: typeof Input.TextArea;
}

export type ActionsRender = (
  ori: VNode,
  info: {
    components: {
      SendButton: typeof SendButton;
      ClearButton: typeof ClearButton;
      LoadingButton: typeof LoadingButton;
    };
  },
) => VNode;

export interface SenderProps extends Pick<TextAreaProps, 'placeholder'> {
  onKeyPress?: KeyboardEventHandler;

  prefixCls?: string;
  defaultValue?: string;
  value?: string;
  loading?: boolean;
  readOnly?: boolean;
  submitType?: SubmitType;
  disabled?: boolean;
  onSubmit?: (message: string) => void;
  onChange?: (
    value: string,
    event?: ChangeEvent,
    // event?: FormEvent | ChangeEvent,
  ) => void;
  onCancel?: VoidFunction;
  onKeyDown?: KeyboardEventHandler;
  onPaste?: ClipboardEventHandler;
  onPasteFile?: (file: File) => void;
  components?: SenderComponents;
  styles?: {
    prefix?: CSSProperties;
    input?: CSSProperties;
    actions?: CSSProperties;
  };
  rootClassName?: string;
  classNames?: {
    prefix?: string;
    input?: string;
    actions?: string;
  };
  style?: CSSProperties;
  className?: string;
  actions?: VNode | ActionsRender;
  allowSpeech?: AllowSpeech;
  prefix?: VNode;
  header?: VNode;
}

export type SenderRef = {
  nativeElement: HTMLDivElement;
} & Pick<InputRef, 'focus' | 'blur'>;

export interface SenderHeaderContextProps {
  prefixCls?: ConfigProviderProps['prefixCls'];
}

export type SemanticType = 'header' | 'content';

export interface SenderHeaderProps {
  forceRender?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: VNode | string;
  children?: VNode;
  className?: string;
  style?: CSSProperties;
  classNames?: Partial<Record<SemanticType, string>>;
  styles?: Partial<Record<SemanticType, CSSProperties>>;
  closable?: boolean;
}

export interface RecordingIconProps {
  className?: string;
}

export interface ActionButtonContextProps {
  prefixCls?: ConfigProviderProps['prefixCls'];
  onSend?: VoidFunction;
  onSendDisabled?: boolean;
  onClear?: VoidFunction;
  onClearDisabled?: boolean;
  onCancel?: VoidFunction;
  onCancelDisabled?: boolean;
  onSpeech?: VoidFunction;
  onSpeechDisabled?: boolean;
  speechRecording?: boolean;
  disabled?: boolean;
}

export interface ActionButtonProps extends ButtonProps {
  action: 'onSend' | 'onClear' | 'onCancel' | 'onSpeech';
}
