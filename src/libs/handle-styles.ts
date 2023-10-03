export const handleStyles = (
  slot: string,
  card_w: string | undefined,
  board_w: string | undefined,
) => {
  return `
#${slot} .query-btn {
  color: #000;
  border: 1px solid black;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 10px;
  padding: 1px 10px;
  border-radius: 8px;
  background-color: #eee;
}
#${slot} .wrapper {
  color: #000;
  max-width: ${board_w}px;
  overflow-x: scroll;
  white-space: nowrap;
}
.react-kanban-board{
    padding:5px
}
#${slot} .react-kanban-card{
  max-width:${card_w ?? 250}px;
  min-width:${card_w ?? 250}px
}
.react-kanban-card{
    border-radius:3px;
    background-color:#fff;
    padding:10px;
    margin-bottom:7px
}
.react-kanban-card-skeleton,.react-kanban-card,.react-kanban-card-adder-form{
    box-sizing:border-box;
    max-width:250px;
    min-width:250px
}
.react-kanban-card__description{
    padding-top:0px
}
.react-kanban-column{
    padding:15px;
    border-radius:2px;
    background-color:#eee;
    margin:5px
}
.react-kanban-column input:focus{
    outline:none
}
.react-kanban-card-adder-form{
    border-radius:3px;
    background-color:#fff;
    padding:10px;
    margin-bottom:7px
}
.react-kanban-card-adder-form input{
    border:0px;
    font-family:inherit;
    font-size:inherit
}
.react-kanban-card-adder-button{
    width:100%;
    margin-top:5px;
    background-color:transparent;
    cursor:pointer;
    border:1px solid #ccc;
    transition:0.3s;
    border-radius:3px;
    font-size:20px;
    margin-bottom:10px;
    font-weight:bold
}
.react-kanban-card-adder-button:hover{
    box-shadow: -5px 10px 15px #aaaaaa;
}
.react-kanban-card-adder-form__title{
    font-weight:bold;
    border-bottom:1px solid #eee;
    padding-bottom:5px;
    font-weight:bold;
    display:flex;
    justify-content:space-between;
    width:100%;
    padding:0px
}
.react-kanban-card-adder-form__title:focus{
    outline:none
}
.react-kanban-card-adder-form__description{
    width:100%;
    margin-top:10px
}
.react-kanban-card-adder-form__description:focus{
    outline:none
}
.react-kanban-card-adder-form__button{
    background-color:#eee;
    border:none;
    padding:5px;
    width:45%;
    margin-top:5px;
    border-radius:3px
}
.react-kanban-card-adder-form__button:hover{
    transition:0.3s;
    cursor:pointer;
    background-color:#ccc
}
.react-kanban-column-header{
    padding-bottom:10px;
    font-weight:bold
}
.react-kanban-column:hover {
    transform: translateY(-8px);
    transition: all 0.1s;
}
.react-kanban-column-header input:focus{
    outline:none
}
.react-kanban-column-header__button{
    color:#333333;
    background-color:#ffffff;
    border-color:#cccccc
}
.react-kanban-column-header__button:hover,.react-kanban-column-header__button:focus,.react-kanban-column-header__button:active{
    background-color:#e6e6e6
}
.react-kanban-column-adder-button{
    border:2px dashed #eee;
    height:132px;
    margin:5px
}
.react-kanban-column-adder-button:hover{
    cursor:pointer
}`;
};
