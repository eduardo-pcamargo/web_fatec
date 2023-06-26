import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PokemonCard({ id, name, image, types }) {

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    } else {
      return types[0].type.name;
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: 14, fontWeight: "bold", textTransform: "capitalize", textAlign: "center" }}
          >
            # {id} - {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ fontSize: 12, fontWeight: "normal", textTransform: "lowercase", textAlign: "center" }}
          >
            {typeHandler()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}