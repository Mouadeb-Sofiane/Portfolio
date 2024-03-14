const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaProjet {
id?: number;
nom_projet: string;
image_projet: string;
lien_projet: string;
description_projet: string;
titre_page: string;
description_page: string;
};

export interface SchemaPageCard {
id?: string;
titre: string;
description: string;
};
// favori: boolean;

// nbrChambres: number;
// nbrSDB: number;
// adresse: string;
// surface: string;


