package com.huibozhixin.jhipstersmartadmin.service.mapper;

import com.huibozhixin.jhipstersmartadmin.domain.*;
import com.huibozhixin.jhipstersmartadmin.service.dto.BaseQuestionDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity BaseQuestion and its DTO BaseQuestionDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface BaseQuestionMapper extends EntityMapper<BaseQuestionDTO, BaseQuestion> {


    @Mapping(target = "answers", ignore = true)
    BaseQuestion toEntity(BaseQuestionDTO baseQuestionDTO);

    default BaseQuestion fromId(Long id) {
        if (id == null) {
            return null;
        }
        BaseQuestion baseQuestion = new BaseQuestion();
        baseQuestion.setId(id);
        return baseQuestion;
    }
}
