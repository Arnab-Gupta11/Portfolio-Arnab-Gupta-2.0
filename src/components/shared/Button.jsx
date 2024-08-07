import PropTypes from "prop-types"
import cn from "../../lib/cn"
import useResponsiveIconSize from "../../hooks/useResponsiveIconSize";
const Button = (
  {
    children,
    variant,
    size,
    icon: Icon,
    iconPosition,
    iconAnimation,
    iconSize,
    iconStyle,
    className,
    ...props
  }

) => {
  const iconSizeRes = useResponsiveIconSize();
  const baseStyle = "inline-flex items-center justify-center px-4 py-2 font-sora transition-all  focus:outline-none";
  const variantStyles = {
    default: "bg-button-gradient text-white rounded-[8px] border-[#15002a] md:border-b-[2px] hover:bg-button-gradient-hover hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-lg hover:shadow-[#8750f733]",
    outline: "bg-transparent text-secondary-100 hover:text-secondary-200 font-medium  rounded-[8px] border-[#15002a]  border-2 hover:border-primary-100  active:bg-[#0a0716]"
  }
  const sizeStyles = {
    auto: "text-[10px] xsm:text-sm sm:text-base 2xl:text-lg px-2 py-1.5 xsm:px-4 xs:py-2 bs:px-6 bs:py-3 rounded-[6px] md:rounded-[8px]",
    sm: "text-[10px] xs:text-sm px-2 py-1.5 rounded-[8px]",
    md: "text-[10px] xsm:text-sm sm:text-base px-2 py-1.5 xs:px-4 xs:py-2",
    lg: "text-base px-6 py-3 rounded-[8px]",
  };
  const iconPositionStyles = {
    left: 'mr-1 xs:mr-2',
    right: 'ml-1 xs:ml-2',
  };
  return (
    <button
      className={cn(
        baseStyle,
        variantStyles[variant] || variantStyles.default,
        sizeStyles[size],
        className,
        'group'
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={cn(iconAnimation, iconPositionStyles.left, iconStyle)} size={iconSize ? iconSize : iconSizeRes} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={cn(iconAnimation, iconPositionStyles.right, iconStyle)} size={iconSize ? iconSize : iconSizeRes} />
      )}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outline']),
  size: PropTypes.oneOf(['sm', 'lg', 'xl', 'auto']),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconAnimation: PropTypes.string,
  iconSize: PropTypes.number,
  iconStyle: PropTypes.string,
  className: PropTypes.string

}
Button.defaultProps = {
  variant: 'default',
  size: 'auto',
  icon: null,
  iconPosition: 'left',
  iconAnimation: '',
  iconStyle: '',
  iconSize: undefined,
  className: '',
}
export default Button;
