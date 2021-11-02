import Icons from './../../svg/icons.svg'

export const Icon = ({ name, color, width, height, className }) => {
    return (
      <svg width={`${width}px`} height={`${height}px`} stroke={color} className={className}>
        <use href={Icons + `#${name}`} />
      </svg>
    )
}