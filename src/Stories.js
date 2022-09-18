function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} alt={props.usuario}/>
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div >
  );
}

function Setinha() {
  return (
    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}

export default function Stories() {
  const stories = [
    { img: "assets/img/9gag.svg", usuario: "9gag" },
    { img: "assets/img/meowed.svg", usuario: "meowed" },
    { img: "assets/img/barked.svg", usuario: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "assets/img/respondeai.svg", usuario: "respondeai" },
    { img: "assets/img/filomoderna.svg", usuario: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }
  ];

  return (
    <div class="stories">
      {stories.map(story => <Story img={story.img} usuario={story.usuario} />)}
      <Setinha />
    </div>
  );
}