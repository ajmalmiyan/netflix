import { Inner,Container,Title,SubTtile,Image,Pane,Item } from './styles/jumbotron';

export default function Jumbotron({children,direction='row',...restProps}){
    return(
        <Item direction={direction}>
            <Inner>
                {children}
            </Inner>
        </Item>  
    )
}

Jumbotron.Container = function JumbotronContainer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTtile = function JumbotronSubTtile({children,...restProps}){
    return <SubTtile {...restProps}>{children}</SubTtile>
}

Jumbotron.Image = function JumbotronImage({...restProps}){
    return <Image {...restProps}/>
}

Jumbotron.Pane = function JumbotronPane({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}