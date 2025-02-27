/*interface PropsButtonLink {
    href?: string;
    name: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    className?: string;
    isbutton?: boolean;
    disabled?: boolean
    onClick?: () => void;
  }
  
  function LinkButton({
    href,
    name,
    className,
    isbutton,
    type,
    disabled,
    onClick,
  }: PropsButtonLink) {
    return (
      <>
        {isbutton ? (
          <button
          type={type}
          disabled={disabled}
            className={`flex justify-center py-4 px-2 ml-8 mb-12 max-w-[18rem] shadow-boxShadowButton items-center relative button h-24 lg:h-[60px] xl:min-w-[30rem] lg:m-0  ${className} overflow-hidden`}
            onClick={onClick}
          >
            <span className="text-3xl z-10 text-colorFontPrimary font-bold tracking-wide min-w-[16.7] min-h-[2.7rem] lg:min-h-0 ">
              {name}
            </span>
          </button>
        ) : (
          <a href={href} className="block w-full flex-grow-0 flex-shrink-0">
            <button
              className={`flex justify-center py-4 px-2 ml-8 mb-12 max-w-[18rem] shadow-boxShadowButton items-center relative button h-24 lg:h-[60px] xl:min-w-[30rem] lg:m-0  ${className} overflow-hidden`}
            >
              <span className="text-3xl z-10 text-colorFontPrimary font-bold tracking-wide min-w-[16.7] min-h-[2.7rem] lg:min-h-0 ">
                {name}
              </span>
            </button>
          </a>
        )}
      </>
    );
  };
  
  export default LinkButton;*/
import './index.scss'

  interface PropsLinkButton {
    href?: string;
    name: string;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
    isButton?: boolean;
    disabled?: boolean;
    onClick?: () => void;
  }
  
  function LinkButton({
    href,
    name,
    className,
    isButton,
    type,
    disabled,
    onClick,
  }: PropsLinkButton) {
    return (
      <>
        {isButton ? (
          <button
            type={type}
            disabled={disabled}
            className={`button ${className}`}
            onClick={onClick}
          >
            <span>{name}</span>
          </button>
        ) : (
          <a href={href} className="block">
            <button className={`button ${className}`}>
              <span>{name}</span>
            </button>
          </a>
        )}
      </>
    );
  };
  
  export default LinkButton;