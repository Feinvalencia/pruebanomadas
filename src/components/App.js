import { useState } from "react";
import axios from "axios";
import {
  BoxButton,
  BoxInput,
  BoxText,
  ButtonGo,
  Container,
  Content,
  Input,
} from "./Styles";

const App = () => {
  const [name, setName] = useState([]);
  const [nations, setNations] = useState([]);
  const [gender, setGender] = useState("");
  const [loadingNations, setLoadingNations] = useState(false);

  const [loadingGender, setLoadingGender] = useState(false);
  const [loadingAge, setLoadingAge] = useState(false);

  const [age, setAge] = useState(0);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const fetchNation = async () => {
    setLoadingNations(true);
    try {
      const response = await axios.get(
        `https://api.nationalize.io/?name=${name}`
      );
      const dataNation = response.data.country;

      if (dataNation.length > 0) {
        setNations(dataNation);
      } else {
        setNations([
          {
            country_id: "CL",
            probability: 0.98,
          },
        ]);
      }
    } catch (error) {
      setNations([
        {
          country_id: "GT",
          probability: 1,
        },
      ]);
    }
    setLoadingNations(false);
  };
  const fetchGender = async () => {
    setLoadingGender(true);
    try {
      const response = await axios.get(`https://api.genderize.io?name=${name}`);
      const dataGender = response.data.gender;

      if (dataGender !== null) {
        setGender(dataGender);
      } else {
        setGender("famele");
      }
    } catch (err) {
      setGender("male");
      console.log(err);
    }
    setLoadingGender(false);
  };

  const fetchAge = async () => {
    setLoadingAge(true);
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const age = response.data.age;
      if (age !== null) {
        setAge(age);
      } else {
        setAge(100);
      }
    } catch (err) {
      setAge(100);
      console.log(err);
    }
    setLoadingAge(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNation();
    fetchAge();
    fetchGender();
  };
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <BoxInput>
            <Input
              value={name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
            />
          </BoxInput>
          <BoxButton>
            <ButtonGo onClick={handleSubmit}>Buscar</ButtonGo>
          </BoxButton>
          <>
            {!loadingNations && !loadingGender && !loadingAge && (
              <BoxText>
                {nations.map((nation) => (
                  <span key={nation.country_id}>
                    <span>I think you are from any of these countries </span>
                    {`${nation.country_id}${(nation.probability * 100).toFixed(
                      2
                    )} `}
                  </span>
                ))}
                {age !== 0 && `your age ${age}`}
                {gender !== "" && ` you gender ${gender}`}
              </BoxText>
            )}
          </>
        </form>
      </Content>
    </Container>
  );
};

export default App;
