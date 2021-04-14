import { PetModel } from 'src/app/core/pet/pet.model';
import { PetWebEntity } from './pet-web.entity';

export class PetWebMapper {

    mapFrom(petMockEntity: PetWebEntity): PetModel {
        return {
            id: petMockEntity.id,
            name: petMockEntity.name,
            birthday: new Date(petMockEntity.birthday),
            vetId: petMockEntity.vetId
        };
    }

    mapTo(petModel: PetModel): PetWebEntity {
        return {
            id: petModel.id,
            name: petModel.name,
            birthday: petModel.birthday.getTime(),
            vetId: petModel.vetId
        };
    }

}
