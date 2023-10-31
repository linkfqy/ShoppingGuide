package com.rabbiter.em.service;

import com.auth0.jwt.JWT;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.rabbiter.em.annotation.Authority;
import com.rabbiter.em.entity.AuthorityType;
import com.rabbiter.em.entity.User;
import com.rabbiter.em.entity.UserInfo;
import com.rabbiter.em.mapper.CategoryMapper;
import com.rabbiter.em.mapper.IconMapper;
import com.rabbiter.em.mapper.UserMapper;
import com.rabbiter.em.utils.TokenUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

//@Authority(AuthorityType.requireLogin)
@Service
public class UserInfoService {

    @Resource
    private UserService userService;
    @Resource
    private CartService cartService;
    @Resource
    private OrderService orderService;
    @Resource
    private GoodService goodService;
    @Resource
    private CategoryMapper categoryMapper;
    @Resource
    private IconMapper iconMapper;
    @Resource
    private UserMapper userMapper;

    public UserInfo getUserInfo(Integer iconId, Integer categoryId, @NotNull HttpServletRequest request){
        UserInfo userInfo = new UserInfo();
        String token = request.getHeader("token");
        Integer userId = Integer.parseInt(JWT.decode(token).getAudience().get(0));
        String username = userMapper.getUsernameById(userId);
        userInfo.setUsername(username);
        List<Map<String,Object>> cart = cartService.selectByUserId((long)userId);
        List<Map<String,Object>> orders = orderService.selectByUserId(userId);
        List<String> cartItems = new ArrayList<>();
        List<String> orderItems = new ArrayList<>();
        for(Map<String, Object> item: cart){
            cartItems.add(goodService.getGoodById((long)item.get("goodId")).getName());
        }
        cartItems = cartItems.stream().distinct().collect(Collectors.toList());
        userInfo.setCartItems(cartItems);
        for(Map<String, Object> item: orders){
            orderItems.add(goodService.getGoodById((long)item.get("good_id")).getName());
        }
        orderItems = orderItems.stream().distinct().collect(Collectors.toList());
        userInfo.setOrderItems(orderItems);
        String categoryName = null;
        String iconName = null;
        if(iconId != null){
            iconName = iconMapper.getNameById(iconId);
        }
        if(categoryId != null) {
            categoryName = categoryMapper.getNameById(categoryId);
        }
        userInfo.setCurrentFirstCategory(iconName);
        userInfo.setCurrentSecondCategory(categoryName);
        return userInfo;
    }
}
