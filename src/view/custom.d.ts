
interface Elem extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{
  class?: string
  name?: string
  readonly?: boolean
  [propName: string] : any;
}
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string] : Elem;
  }
}