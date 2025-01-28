import { Meta, StoryObj} from "@storybook/react";
import Inputs from "./Inputs";

const meta :Meta<typeof Inputs> ={
    component : Inputs, 
    title :'UI/INPUTS',
}

export default meta;

export const FirstComponent : StoryObj<typeof Inputs> = {
    args : {
        label :"Name"
    }
}

export const SecondComponent : StoryObj<typeof Inputs> = {
    args : {
        label :"LastName"
    }
}