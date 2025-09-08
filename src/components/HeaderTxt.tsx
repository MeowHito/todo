type HeaderProps = {
    title: string;
    sizeTxt: number;
    status: boolean;
  };
  export default function HeaderText({ title, sizeTxt, status }: HeaderProps) {
    return (
      <h1 style={{ fontSize: `${sizeTxt}px`, color: status ? 'green' : 'red' }}>
        {title}
      </h1>
    );
  }