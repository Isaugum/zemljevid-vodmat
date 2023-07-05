import { useContentState } from "../../../state/content.state";

interface NavButtonProps {
  title: string;
  src: string;
  id: number
}

const MenuButtons = ({ title, src, id }: NavButtonProps) => {
  const [contentIndex, setContentIndex, isMenu, openMenu] = useContentState((store: any) => ([
    store.contentIndex,
    store.setContentIndex,
    store.isMenu,
    store.openMenu
  ]));

  return (
    <button key={title} className='w-full h-full flex justify-center items-center my-2'
        onClick={() => {
            !!isMenu && openMenu(false);
            setContentIndex(id)
          }
        }>
      <img className={`h-12 w-12 md:h-20 md:w-20 border-2 border rounded-full bg-white ${contentIndex === id ? 'md:h-20 md:w-20' : 'md:h-12 md:w-12 md:group-hover:h-20 md:group-hover:w-20'}`} src={src} alt={title} />
      <span className={`text-3xl w-full text-center ${contentIndex === id ? '' : 'md:group-hover:block hidden'}`}>{title}</span>
    </button>
  )
}

export { MenuButtons };