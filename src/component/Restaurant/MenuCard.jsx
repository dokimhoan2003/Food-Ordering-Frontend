import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const demo = [
  {
    category: "Nut & seeds",
    ingredients: ["A"],
  },
  {
    category: "Protein",
    ingredients: ["C", "B"],
  },
];
const MenuCard = () => {
  const handleCheckBoxChange = (ingredient) => {
    console.log("ingredient", ingredient);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://media.istockphoto.com/id/2172782097/vi/anh/traditional-vietnamese-b%C3%BAn-b%C3%B2-hu%E1%BA%BF-with-aromatic-broth-and-tender-beef.jpg?s=2048x2048&w=is&k=20&c=OH_07MQCRSYhO2sqKo0ZPYtCMXj1HwFfPV2m-VVGnuE="
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="text-xl font-semibold">Bún bò Huế</p>
              <p>2$</p>
              <p className="text-gray-600">Spicy Vietnamese Beef Noodle Soup</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item, index) => (
              <div key={index}>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((ingredient, i) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox
                          onChange={() => handleCheckBoxChange(ingredient)}
                        />
                      }
                      label={ingredient}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button
              variant="contained"
              disabled={false}
              type="submit"
              color="success"
            >
              {true ? "Add to Card" : "Out Of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
