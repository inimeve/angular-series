import { PetModel } from 'src/app/core/pet/pet.model';
import { PetMockEntity } from './pet-mock.entity';

export class PetMockMapper {

    mapFrom(petMockEntity: PetMockEntity): PetModel {
        return {
            id: petMockEntity.id,
            name: petMockEntity.name,
            birthday: new Date(petMockEntity.birthday),
            vetId: petMockEntity.vetId
        };
    }

    mapTo(petModel: PetModel): PetMockEntity {
        return {
            id: petModel.id,
            name: petModel.name,
            birthday: petModel.birthday.getTime(),
            vetId: petModel.vetId
        };
    }

}
