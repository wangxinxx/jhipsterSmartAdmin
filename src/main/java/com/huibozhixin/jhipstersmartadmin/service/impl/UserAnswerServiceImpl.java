package com.huibozhixin.jhipstersmartadmin.service.impl;

import com.huibozhixin.jhipstersmartadmin.service.UserAnswerService;
import com.huibozhixin.jhipstersmartadmin.domain.UserAnswer;
import com.huibozhixin.jhipstersmartadmin.repository.UserAnswerRepository;
import com.huibozhixin.jhipstersmartadmin.service.dto.UserAnswerDTO;
import com.huibozhixin.jhipstersmartadmin.service.mapper.UserAnswerMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing UserAnswer.
 */
@Service
@Transactional
public class UserAnswerServiceImpl implements UserAnswerService {

    private final Logger log = LoggerFactory.getLogger(UserAnswerServiceImpl.class);

    private final UserAnswerRepository userAnswerRepository;

    private final UserAnswerMapper userAnswerMapper;

    public UserAnswerServiceImpl(UserAnswerRepository userAnswerRepository, UserAnswerMapper userAnswerMapper) {
        this.userAnswerRepository = userAnswerRepository;
        this.userAnswerMapper = userAnswerMapper;
    }

    /**
     * Save a userAnswer.
     *
     * @param userAnswerDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public UserAnswerDTO save(UserAnswerDTO userAnswerDTO) {
        log.debug("Request to save UserAnswer : {}", userAnswerDTO);
        UserAnswer userAnswer = userAnswerMapper.toEntity(userAnswerDTO);
        userAnswer = userAnswerRepository.save(userAnswer);
        return userAnswerMapper.toDto(userAnswer);
    }

    /**
     * Get all the userAnswers.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<UserAnswerDTO> findAll(Pageable pageable) {
        log.debug("Request to get all UserAnswers");
        return userAnswerRepository.findAll(pageable)
            .map(userAnswerMapper::toDto);
    }

    /**
     * Get one userAnswer by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public UserAnswerDTO findOne(Long id) {
        log.debug("Request to get UserAnswer : {}", id);
        UserAnswer userAnswer = userAnswerRepository.findOne(id);
        return userAnswerMapper.toDto(userAnswer);
    }

    /**
     * Delete the userAnswer by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete UserAnswer : {}", id);
        userAnswerRepository.delete(id);
    }
}
