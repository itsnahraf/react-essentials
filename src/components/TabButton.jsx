export default function TabButton({children, onSelect, isSelected}){
    function handleClick(){
        return console.log("NAY NAY NAY NAY NAYYYYYY")
    }
return <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
// using function handleClick as a value for onClick prop
}


// export default function TabButton(props){
//     function handleClick(){
//         return console.log("NAY NAY NAY NAY NAYYYYYY")
//     }
// return <li><button onClick={onSelect}>{props.children}</button></li>
// // using function handleClick as a value for onClick prop
// }