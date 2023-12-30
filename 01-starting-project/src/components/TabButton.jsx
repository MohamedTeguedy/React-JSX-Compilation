export default function({children,onSelect,isSelected}){
 return (
    <button className={isSelected? 'active':undefined} onClick={onSelect}>{children}</button>
 )
}