const shortcuts: {
  name: string;
  link: string;
  color: string;
}[] = [
  { name: "Wydarzenia", link: "/wydarzenia", color: "blue" },
  { name: "Projekty", link: "/projekty", color: "green" },
  { name: "Organizacje", link: "/organizacje", color: "purple" },
];

export default function Index() {
  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center">
      <h1 className="p-20 text-center">
        System zarządzania Organizacjami Studenckimi
      </h1>

      <div className="flex w-full justify-center gap-6">
        {shortcuts.map((shortcut) => (
          <div
            className="w-full rounded-md px-8 py-4"
            key={shortcut.name}
            style={{
              backgroundColor: shortcut.color,
            }}
            onClick={() => (window.location.href = shortcut.link)}
          >
            {shortcut.name}
          </div>
        ))}
      </div>
    </div>
  );
}
