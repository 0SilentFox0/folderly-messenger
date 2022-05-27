export namespace VButtonInterface {
  export namespace Props {
    export type Size = 'large' | 'big' | 'medium' | 'small';
    export type Type =
      | 'primary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'info'
      | 'basic'
      | 'white'
      | 'transparent'
      | 'border'
      | 'ghost'
      | 'gradient';
  }

  export type Class = [
    Props.Size,
    Props.Type,
    {
      'is-icon': boolean;
      'no-border': boolean;
      rounded: boolean;
      fluid: boolean;
    },
  ];

  export interface Style {
    justifyContent: string;
    maxWidth: string;
  }
}
