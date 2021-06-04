package android.api.service;

import android.api.entity.Orders;
import android.api.repository.OrderRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService{
    private OrderRepository orderRepository;


    public OrderServiceImpl(OrderRepository orderRepository,
                            UserService userService) {
        this.orderRepository = orderRepository;
    }

    @Override
    public void add(Orders orders) {
        orders.setGoodsName("test");
        orders.setStatus(Orders.NOT_COLLECTED);
        this.orderRepository.save(orders);
    }

    @Override
    public Orders getOrderById(Long id) {
        return null;
    }

    @Override
    public Orders update(Long id, Orders orders) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        oldOrders.setStartPlace(orders.getStartPlace());
        oldOrders.setEndPlace(orders.getEndPlace());
        oldOrders.setGoodsName(orders.getGoodsName());
        return this.orderRepository.save(oldOrders);
    }

    @Override
    public Orders defaultOrder(Long id, Orders orders) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        oldOrders.setStatus(0);
        return this.orderRepository.save(oldOrders);
    }

    @Override
    public Orders updateStatus(Long id, Integer status) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        oldOrders.setStatus(status);
        return this.orderRepository.save(oldOrders);
    }

    @Override
    public Orders complete(Long id, Orders orders) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        oldOrders.setStatus(3);
        return this.orderRepository.save(oldOrders);
    }

    @Override
    public Orders confirm(Long id, Orders orders) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        long deleteTime = System.currentTimeMillis();
        oldOrders.setEndTime(String.valueOf(deleteTime));
        oldOrders.setStatus(4);
        return this.orderRepository.save(oldOrders);
    }

    @Override
    public void delete(Long id) {
        this.orderRepository.deleteById(id);
    }

    @Override
    public Page<Orders> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<Orders> findAllById(Pageable pageable) {
        return null;
    }

    @Override
    public Page<Orders> findAllByStatus(int status, Pageable pageable) {
        return null;
    }

    @Override
    public Page<Orders> findAllByDriver(Pageable pageable) {
        return null;
    }
}