import Typography from "@mui/material/Typography";
import {Card, CardContent, CardMedia} from "@mui/material";

export default  function News() {
    return (
        <>
        <Typography>
            Découvrez nos activités quotidiennes
        </Typography>
        <Card className={"m-16"}>
            <CardMedia
                sx={{ height: 140 }}
                image="/news.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Titre d'actualité
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
        </>

    )

}