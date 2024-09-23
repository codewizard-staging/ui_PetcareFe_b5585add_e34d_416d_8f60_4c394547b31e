import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCreate, PetEdit, PetView, 
Pets
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Pets/view/:id" element={<PetView {...props} title={'View Pet'} />} />
                        <Route path="Pets/edit/:id" element={<PetEdit {...props} title={'Edit Pet'} />} />
                        <Route path="Pets/create" element={<PetCreate {...props} title={'Create Pet'} />} />
                                                <Route path="/" element={<Pets {...props} title={'Table Layout'} nolistbar={true} />} />

                <Route path="/productsPets" element={<Pets {...props} title={'Table Layout'} />} />
        </Routes>
    )

};

export default Component;